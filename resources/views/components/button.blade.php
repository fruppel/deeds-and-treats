@php
$class = 'inline-flex items-center px-4 py-2 border rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150 text-white bg-gray-800 border-transparent';
@endphp
<button {{ $attributes->merge(['type' => 'submit', 'class' => $class]) }}>
    {{ $slot }}
</button>
