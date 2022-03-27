@props(['field'])

<div class="mt-1">
@error($field)
    <div class="text-red-600 text-xs">
        {{ $message }}
    </div>
@enderror
</div>
