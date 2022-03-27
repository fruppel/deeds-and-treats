@php
$classes = [
    'border',
    'font-semibold',
    'inline-flex',
    'items-center',
    'px-4',
    'py-2',
    'rounded-md',
    'text-xs',
    'uppercase',
];
@endphp
<a {{ $attributes->merge(['type' => 'submit', 'class' => implode(' ', $classes)]) }}>
    {{ $slot }}
</a>
