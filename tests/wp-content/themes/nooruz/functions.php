<?php

function nooruz_assets() {

    // wp_enqueue_style('maincss', get_template_directory_uri() . ' /css/style.css' );
    // wp_enqueue_style('mediacss', get_template_directory_uri() . ' /css/media.min.css' );
    // wp_enqueue_style('stylehome', get_template_directory_uri() . ' /css/style_home.css' );
    // wp_enqueue_style('stylenews', get_template_directory_uri() . ' /css/style_news.css' );

    
    // wp_enqueue_script( 'scriptsdf', get_template_directory_uri() . ' /js/script.js', array(), '20151215', true );
    // wp_enqueue_script( 'slicksdf', get_template_directory_uri() . ' /js/slick.js', array(), '20151215', true );
    // wp_enqueue_script( 'jquerysdf', get_template_directory_uri() . ' /js/jquery.js', array(), '20151215', true );

}



add_action('wp_enqueue_scripts', 'nooruz_assets');

show_admin_bar( false );