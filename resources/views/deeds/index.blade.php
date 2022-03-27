<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Deeds') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="mb-4">
                        <x-link-button href="{{ route('deeds.create') }}" color="teal">Neu</x-link-button>
                    </div>
                    <table class="table-auto border-collapse w-full">
                        <tr>
                            <th class="text-left">Name</th>
                            <th class="text-right">Belohnung</th>
                            <th class="hidden sm:table-cell text-left">Erstellt</th>
                            <th></th>
                        </tr>
                        @foreach ($deeds as $deed)
                            <tr>
                                <td class="py-1 border-b">{{ $deed->name }}</td>
                                <td class="py-1 border-b text-right">{{ $deed->present()->valueInEuro }}</td>
                                <td class="py-1 border-b hidden sm:table-cell">
                                    {{ $deed->created_at }}
                                </td>
                                <td class="py-1 border-b flex justify-end">
                                    <a href="{{ route('deeds.edit', $deed) }}" class="mr-1 border rounded-md block p-1 border-teal-500 text-teal-500">
                                        <x-icon.pencil></x-icon.pencil>
                                    </a>

                                    <list-delete-button target-url="{{ route('api.deeds.destroy', $deed->id) }}" />
                                </td>
                            </tr>
                        @endforeach
                    </table>
                </div>
            </div>
        </div>
    </div>

</x-app-layout>
