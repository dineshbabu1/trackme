<?php

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
