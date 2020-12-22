<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Нооруз</title>
    <!-- ------------------------------- styles -------------------------------- -->
    <link rel="stylesheet" href="<?php bloginfo('template_directory')?>/css/style_home.css">
    <link rel="stylesheet" href="<?php bloginfo('template_directory')?>/css/style.css">
    <link rel="stylesheet" href="<?php bloginfo('template_directory')?>/css/media.css">
<!-- 
    <?php wp_head(); ?> -->
</head>

<body>
    <div class="wrapper">
        <!-- ------------------------------- header -------------------------------- -->
        <header class="header">
            <div class="container">
                <!-- nav -->
                <nav class="nav">
                    <!-- nav_bur -->

                    <div class="nav_bar">
                        
                        <div class="burder_menu">
                            <span></span>
                        </div>

                        <!-- menu -->
                        <?php 
                        $args = array(
                            'theme_location'  => '',
                            'menu'            => '',
                            'container'       => 'ul',
                            'container_class' => 'menu ',
                            'container_id'    => 'main-menu',
                            'menu_class'      => 'menu ',
                            'menu_id'         => 'main-menu',
                            'echo'            => true,
                            'fallback_cb'     => 'wp_page_menu',
                            'before'          => '',
                            'after'           => '',
                            'link_before'     => '',
                            'link_after'      => '',
                            'items_wrap'      => '<ul id = "%1$s" class = "%2$s">%3$s</ul>',
                            'depth'           => 0,
                            'walker'          => '',
                        ); 
                        wp_nav_menu($args); ?>

                        
                        
                    </div>
                    <!-- logo -->
                    <div class="logo">
                        <img src="<?php bloginfo('template_directory')?>/image/logo.png" alt="logo">
                    </div>
                    <!-- addres -->
                    <div class="addres">
                        <div class="social_networks">
                            <a href="#"><img src="<?php bloginfo('template_directory')?>/image/instagram.png" alt="instagram">
                            </a>
                            <a href="#"><img src="<?php bloginfo('template_directory')?>/image/whatsapp.png" alt="whatsapp">
                            </a>
                            
                        </div>
                        <p>Наш адресс:</p>
                        <p class="adress">г.Бишкек ул. Карадарьинская 3</p>
                    </div>
                    <!-- phone -->
                    <div class="phone">
                        <span class="number">+996 (770) 800 700</span>
                        <span class="number">+996 (776) 100 440</span>
                        <span class="number">+996 (556) 100 440</span>
                        <a href="#" class="add_number">Заказать звонок?</a>
                    </div>
                </nav>
                <!-- home -->
                <div class="home">
                    <!-- heading -->
                    <h1 class="header_heading heading">
                        <?php bloginfo('name'); ?>
                    </h1>
                    <!-- blocks -->
                    <div class="blocks">
                        <!-- block -->
                        <div class="block">
                            <div class="content_block">
                                <h5 class="name_products">Макаронная продукция</h5>
                                <p>
                                    Макаронные изделия НООРУЗ - натуральный продукт классической рецептуры. Используя
                                    современные
                                    технологии при производстве макарон, мы гарантируем качество. С нашим продуктом
                                    хозяйкам
                                    всегда есть, что приготовить.
                                </p>
                            </div>
                        </div>
                        <!-- block -->
                        <div class="block">
                            <div class="content_block">
                                <h5 class="name_products">Мука</h5>
                                <p>
                                    Наша мука изготовленна из лучших сортов пшеницы, а это значит что вы можете
                                    воплотить в
                                    жизнь любые ваши кулинарные шедевры.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>