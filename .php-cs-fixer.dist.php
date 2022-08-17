<?php

$finder = PhpCsFixer\Finder::create()
    ->exclude('storage')
    ->exclude('tools')
    ->exclude('.husky')
    ->exclude('.github')
    ->exclude('.git')
    ->exclude('node_modules')
    ->exclude('resources')
    ->exclude('vendor')
    ->exclude('bootstrap/cache')
    ->in(__DIR__)
;

$config = new PhpCsFixer\Config();
return $config->setRules([
        '@PSR12' => true,
        'array_syntax' => ['syntax' => 'short'],
    ])
    ->setFinder($finder)
;
