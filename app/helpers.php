<?php

use Illuminate\Support\HtmlString;

/**
 * @param  string  $entryName
 * @return string
 */
function encore_entry_link_tags(string $entryName): string
{
    $entryPointsFile = public_path('js/entrypoints.json');

    $jsonResult = json_decode(file_get_contents($entryPointsFile), true);

    $tags = array_map(function ($item) {
        return '<link rel="stylesheet" href="'.$item.'"/>';
    }, $jsonResult['entrypoints'][$entryName]['css']);

    return new HtmlString(implode('', $tags));
}

/**
 * @param  string  $entryName
 * @return string
 */
function encore_entry_script_tags(string $entryName): string
{
    $entryPointsFile = public_path('js/entrypoints.json');

    $jsonResult = json_decode(file_get_contents($entryPointsFile), true);

    $tags = array_map(function ($item) {
        return '<script src="'.$item.'"></script>';
    }, $jsonResult['entrypoints'][$entryName]['js']);

    return new HtmlString(implode('', $tags));
}
