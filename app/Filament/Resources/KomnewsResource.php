<?php

namespace App\Filament\Resources;

use App\Filament\Resources\KomnewsResource\Pages;
use App\Filament\Resources\KomnewsResource\RelationManagers;
use App\Models\Komnews;
use Filament\Forms;
use Filament\Forms\Components\Section;
use Filament\Forms\Form;
use Filament\Forms\Components\Select;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class KomnewsResource extends Resource
{
    protected static ?string $model = Komnews::class;

    protected static ?string $navigationIcon = 'heroicon-o-newspaper';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([

                //card
                Section::make()
                    ->schema([

                        //image
                        Forms\Components\FileUpload::make('image')
                            ->label('Image')
                            ->disk('public')
                            ->required(),

                        //grid
                        Forms\Components\Grid::make(2)
                            ->schema([

                                //title
                                Forms\Components\TextInput::make('title')
                                    ->label('Title')
                                    ->placeholder('Title')
                                    ->required(),

                            ]),

                        //categories
                        Forms\Components\Grid::make(2)
                            ->schema([

                                Select::make('categories')
                                    ->multiple()
                                    ->relationship(titleAttribute: 'name')
                                    ->searchable()
                                    ->preload(),

                            ]),

                        //content
                        Forms\Components\RichEditor::make('content')
                            ->label('Content')
                            ->placeholder('Content')
                            ->disableToolbarButtons(['attachFiles'])
                            ->required(),

                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image'),
                Tables\Columns\TextColumn::make('title')->searchable(),
                Tables\Columns\TextColumn::make('categories.name')
                    ->label('Categories'),
                Tables\Columns\TextColumn::make('created_at')->sortable(),
                Tables\Columns\TextColumn::make('updated_at')->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListKomnews::route('/'),
            'create' => Pages\CreateKomnews::route('/create'),
            'edit' => Pages\EditKomnews::route('/{record}/edit'),
        ];
    }
}
