<?php

namespace App\Http\Middleware;

use App\Helpers\PageHeader;
use App\Helpers\Toastr;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     */
    public function rootView(Request $request): string
    {
        $user = $request->user();

        return $user?->role === 'user' ? 'layouts.frontend' : 'layouts.admin';
    }

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {

        $user = $request->user();

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $user ? $user->only('name', 'email', 'phone') : null,
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            // 'locale' => session('locale', 'en'),
            'toast' => fn () => Toastr::Toast(),
            'pageHeader' => fn () => PageHeader::toArray(),
        ];
    }
}
