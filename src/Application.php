<?php

namespace Medz\Fans\Material;

use App\Contracts\Applicable;

class Application implements Applicable
{
    /**
     * To response.
     *
     * @param [type] $request
     * @return mixed
     * @author Seven Du <shiweidu@outlook.com>
     */
    public function toResponse($request)
    {
        return view('medz-fans-material-spa::spa');
    }
}
