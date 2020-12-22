<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'nooruz' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'root' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'gD,QZcY0w~VinbP4&}Nl5ELu}4487IZ9+(_ (MkNu5c]}Z|e[+u.N]),&<,!3NYh' );
define( 'SECURE_AUTH_KEY',  'SyCXuD*>R<HI~q$b[MINpP1|Bl>*Eh(~*h4i^M,9$TP:!{u/W`]:V>HiKQ&~^I}5' );
define( 'LOGGED_IN_KEY',    'H44I9-$ouH^M+;LKMatZB#M$e*0b4#9G,K-[D!f1M9BL-=gRNyscryte?nbp]jP$' );
define( 'NONCE_KEY',        '#~&q:z<Vb>eb&IctF!y%|~Urnxpc?f;e)xDFGTX{>Q#A}pG:Vo`K(D[OkfVBn#Y3' );
define( 'AUTH_SALT',        ';[M@uXv/oPq8@-:m-zp3&;|q`!1a^d!A#~yQmvR9mk7-@t?78!hWlJZk9G;)Ys5L' );
define( 'SECURE_AUTH_SALT', '<dK [M/x.uFRs-vE{7i2I-kLb3.$ 2p/IpUfn&EiBOLBv%(n~LkEIBu47{~IvFs5' );
define( 'LOGGED_IN_SALT',   '=5v:pL.U3X?hTS7kt4pSx1o aNk_FEgN#bwkbbS:xon{HCm!cErZ%w!uo+HLn^_r' );
define( 'NONCE_SALT',       '2;`qQnklZ<jP_x-B!(u)ckwmC~ _jXB>~_gFn<C  /?DmH0&#$9ccFLgmd~W0PR@' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
