<?php

namespace Medz\Fans\Material;

use Medz\Fans\Contracts\Applicable;

class Application implements Applicable
{
    public function toResponse($request)
    {
        return view('fans-material-spa::index');
    }
}
