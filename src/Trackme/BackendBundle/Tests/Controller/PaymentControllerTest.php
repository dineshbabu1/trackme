<?php

/*
 * This file is part of the TrackmeBackendBundle package.
 *
 * (c) Gonzalo Moreno C. <goncab380@hotmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Trackme\BackendBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class PaymentControllerTest extends WebTestCase
{
    public function testListall()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', 'payments');
    }

    public function testMypayments()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', 'my-payments');
    }

}
