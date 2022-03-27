@props(['color' => 'default'])
@php
    $classes = [
        'border',
        'font-semibold',
        'inline-flex',
        'items-center',
        'px-3',
        'py-1',
        'rounded-md',
        'text-xs',
        'uppercase',
    ];

    $colorMap = [
        'default' => ['text-gray-800', 'bg-transparent'],
        'teal' => ['text-gray-100', 'bg-teal-500'],
    ];

    $colors = $colorMap[$color] ?? $colorMap[''];
    $classes = array_merge($classes, $colors);
@endphp
<a {{ $attributes->merge(['type' => 'submit', 'class' => implode(' ', $classes)]) }}>
    {{ $slot }}
</a>
