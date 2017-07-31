<?php

namespace Medz\Fans\Material\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->app->extend(Illuminate\Contracts\Routing\ResponseFactory::class, function ($response) {
            $response->macro('display', function ($request, $response) {
                return $this->display($request, $response);
            });

            return $response;
        });
    }

    protected function display()
    {
        return 'hi';
    }
}
