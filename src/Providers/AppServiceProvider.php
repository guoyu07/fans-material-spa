<?php

namespace Medz\Fans\Material\Providers;

use Medz\Fans\Material\Application;
use App\Support\SinglePageAppcation;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the service provider.
     *
     * @return void
     * @author Seven Du <shiweidu@outlook.com>
     */
    public function boot()
    {
        // Publishes assets
        $this->publishes([
            $this->app->make('path.medz-fans-material-spa.assets') => public_path('assets/medz-fans-material-spa')
        ], 'assets');

        // Register namespace views.
        $this->loadViewsFrom($this->app->make('path.medz-fans-material-spa.views'), 'medz-fans-material-spa');
    }

    /**
     * Register the service provider.
     *
     * @return vodi
     * @author Seven Du <shiweidu@outlook.com>
     */
    public function register()
    {
        // Register aliases.
        $this->registerAliases();

        // Register SPA to Core.
        $this->registerSinglePageApplication();
    }

    /**
     * Register a single page application.
     *
     * @author Seven Du <shiweidu@outlook.com>
     */
    private function registerSinglePageApplication()
    {
        SinglePageAppcation::publish('medz/fans-material-spa', Application::class);
    }

    /**
     * Register aliases.
     *
     * @return void
     * @author Seven Du <shiweidu@outlook.com>
     */
    private function registerAliases()
    {
        $this->app->instance('path.medz-fans-material-spa', $root = dirname(dirname(__DIR__)));
        $this->app->instance('path.medz-fans-material-spa.resources', $resources = $root.'/resources');
        $this->app->instance('path.medz-fans-material-spa.assets', $root.'/assets');
        $this->app->instance('path.medz-fans-material-spa.views', $resources.'/views');
    }
}
