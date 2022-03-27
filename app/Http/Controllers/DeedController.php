<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Deed;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class DeedController extends Controller
{
    public function index(): View
    {
        $deeds = Deed::all();

        return view('deeds.index', ['deeds' => $deeds]);
    }

    public function create(): View
    {
        return view('deeds.create', ['deed' => new Deed()]);
    }

    public function edit(Deed $deed): View
    {
        return view('deeds.edit', ['deed' => $deed]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|max:25',
            'value' => 'required|numeric',
        ]);

        $validated['user_id'] = Auth::user()->id;

        Deed::create($validated);

        return redirect(route('deeds.index'));
    }

    public function update(Request $request, Deed $deed): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|max:25',
            'value' => 'required|numeric',
        ]);

        $validated['user_id'] = Auth::user()->id;

        $deed->update($validated);

        return redirect(route('deeds.index'));
    }

    public function destroy(int $id): void
    {
        Deed::destroy($id);
    }
}
