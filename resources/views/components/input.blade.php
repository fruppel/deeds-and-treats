@props(['disabled' => false])

<input {{ $disabled ? 'disabled' : '' }} {!! $attributes->merge(['class' => 'rounded-md shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 block sm:inline-block w-full sm:w-80 border-gray-300']) !!}>
