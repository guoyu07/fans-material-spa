<?php

namespace Medz\Fans\Material\Providers;

use Medz\Fans\Material\Application;
use App\Support\SinglePageAppcation;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadViewsFrom(__DIR__.'/../../resources/views', 'fans-material-spa');
    }

    public function register()
    {
        SinglePageAppcation::publish('medz/fans-material-spa', Application::class);
    }
}
