<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plataforma_curso extends Model
{

    //use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id', 'plataforma_tipo_curso_id','plataforma_bu_id','plataforma_solicitante_id','aberto','titulo','link','inicio','termino','companie_id','equipe_atribuida','chat_moderado','youtube_cadastro','horario_agenda',
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

