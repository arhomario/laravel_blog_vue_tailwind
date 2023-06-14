<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            "name" => 'admin',
            "email" => "admin@email.com",
            "password" => Hash::make('admin'),
            "role" => 'admin'
        ]);
    }
}
