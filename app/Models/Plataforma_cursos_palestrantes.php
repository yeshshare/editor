<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plataforma_cursos_palestrantes extends Model
{

    //use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'plataforma_imagens_cliente_id','plataforma_curso_id','landingpage_id','created_at','updated_at','posicao_atual','ultima_posicao',        
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [

        ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [

    ];

}