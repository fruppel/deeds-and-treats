<form action="{{ $deed->exists ? route('deeds.update', $deed) : route('deeds.store') }}" method="POST">
    @csrf
    @method($deed->exists ? 'PATCH' : 'POST')
    <div>
        <x-label for="name">Name</x-label>
        <x-input
            type="text"
            name="name"
            id="name"
            value="{{ old('name', $deed->name) }}"
        />
        <x-form.error field="name" />
    </div>
    <div class="mt-4">
        <x-label for="value">Belohnung</x-label>

        <currency-input-wrapper></currency-input-wrapper>
    </div>
    <div class="mt-6 flex justify-end">
        <x-cancel-button href="{{ route('deeds.index') }}" class="mr-2">Abbrechen</x-cancel-button>
        <x-button>Speichern</x-button>
    </div>
</form>
