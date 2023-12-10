<?php

namespace App\Http\Controllers;

use App\Models\Framework;
use App\Models\Hobbie;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        $hobbies = Hobbie::all();
        $frameworks = Framework::all();
        return response()->json([
            'users' => $users,
            'hobbies' => $hobbies,
            'frameworks' => $frameworks
        ],200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

    }
    public function updateUser(Request $request, User $user)
    {
        $userFields = $request->validate(([
            'name' => 'required',
            'lastname' => 'required',
            'email' => 'nullable',
            'city' => 'nullable',
            'country' => 'nullable',
            'Summary' => 'nullable',
        ]));

        try {
            DB::beginTransaction();
            $user = User::where('id', 1)->update([
                'name' => $userFields['name'],
                'lastname' => $userFields['lastname'],
                'email' => $userFields['email'],
                'city' => $userFields['city'],
                'country' => $userFields['country'],
                'Summary' => $userFields['Summary'],
            ]);
            DB::commit();
            return response()->json($user, 200);
        } catch (\Exception $exception) {
            DB::rollBack();
            throw new \Exception($exception->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     */

    public function updateHobbies(Request $request, string $id)
    {
        $fields = $request->validate(([
            'name' => 'required',
            'description' => 'required',
        ]));

        try {
            DB::beginTransaction();
            $hobbie = Hobbie::where('id', $id)->update([
                'name' => $fields['name'],
                'description' => $fields['description'],
            ]);
            DB::commit();
            return response()->json($hobbie, 200);
        } catch (\Exception $exception) {
            DB::rollBack();
            throw new \Exception($exception->getMessage());
        }

    }

    public function updateFrameworks(Request $request, string $id)
    {
        $fields = $request->validate(([
            'name' => 'required',
            'level' => 'required',
            'year' => 'required',
        ]));

        try {
            DB::beginTransaction();
            $framework = Framework::where('id', $id)->update([
                'name' => $fields['name'],
                'level' => $fields['level'],
                'year' => $fields['year'],
            ]);
            DB::commit();
            return response()->json($framework, 200);
        } catch (\Exception $exception) {
            DB::rollBack();
            throw new \Exception($exception->getMessage());
        }

    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
