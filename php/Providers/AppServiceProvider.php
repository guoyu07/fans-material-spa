<?php

namespace Medz\Fans\Material\Providers;

use Medz\Fans\Material\Application;
use Illuminate\Support\ServiceProvider;
use Medz\Fans\Support\SinglePageAppcation;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadViewsFrom(__DIR__.'/../../views', 'fans-material-spa');
    }

    public function register()
    {
        SinglePageAppcation::publish('medz/fans-material-spa', Application::class);
    }
}
