<?php

show_admin_bar(false);
add_theme_support( 'post-thumbnails' );

/** STYLES */
/**
 * Enqueue scripts and styles.
 */

function init_scripts() {
    // style css
	wp_enqueue_style( 'flowbite', 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.css', array());
	
	wp_enqueue_style('input-style', get_template_directory_uri().'/src/input.css', [], null, 'all');
	wp_enqueue_style('output-style', get_template_directory_uri().'/src/output.css', [], null, 'all');
	wp_enqueue_style('global-style', get_template_directory_uri().'/public/css/global.css', [], null, 'all');

    // lib js
	wp_enqueue_script( 'tailwind', 'https://cdn.tailwindcss.com', array());
	wp_enqueue_script( 'custom-script', get_template_directory_uri().'/public/js/global.js');
	wp_enqueue_script( 'flowbite', 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js', array(), null, false);
}
add_action( 'wp_enqueue_scripts', 'init_scripts' );


/* AOS LIBRAIRIE ANIMATION */
function theme_enqueue_styles() {
    wp_enqueue_style( 'aos', 'https://unpkg.com/aos@2.3.1/dist/aos.css', array(), null );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

/** ACF */
function acf_json_save_groups($path) {
	return get_stylesheet_directory() . '/inc';
}
add_filter( 'acf/settings/save_json', 'acf_json_save_groups' );

function acf_json_load_point($paths) {
	unset($paths[0]);
	$paths[] = get_stylesheet_directory() . '/inc';
	return $paths;
}
add_filter('acf/settings/load_json', 'acf_json_load_point');

/** MENUS */
function register_custom_menus() {
    register_nav_menus(
      array(
        'header-primary-menu' => __('Menu principal header'),
        'footer-menu' => __('Menu footer'),
        'header-secondary-menu' => __('Menu secondaire header'),
      )
    );
}
add_action('init', 'register_custom_menus');

// Register Custom Post Type
function init_project_custom_post_type() {

	$labels = array(
		'name'                  => 'Projets',
		'singular_name'         => 'Projet',
		'menu_name'             => 'Projets',
		'name_admin_bar'        => 'Post Type',
		'archives'              => 'Item Archives',
		'attributes'            => 'Item Attributes',
		'parent_item_colon'     => 'Parent Item:',
		'all_items'             => 'All Items',
		'add_new_item'          => 'Add New Item',
		'add_new'               => 'Add New',
		'new_item'              => 'New Item',
		'edit_item'             => 'Edit Item',
		'update_item'           => 'Update Item',
		'view_item'             => 'View Item',
		'view_items'            => 'View Items',
		'search_items'          => 'Search Item',
		'not_found'             => 'Not found',
		'not_found_in_trash'    => 'Not found in Trash',
		'featured_image'        => 'Featured Image',
		'set_featured_image'    => 'Set featured image',
		'remove_featured_image' => 'Remove featured image',
		'use_featured_image'    => 'Use as featured image',
		'insert_into_item'      => 'Insert into item',
		'uploaded_to_this_item' => 'Uploaded to this item',
		'items_list'            => 'Items list',
		'items_list_navigation' => 'Items list navigation',
		'filter_items_list'     => 'Filter items list',
	);
    $rewrite = array(
		'slug'                  => 'projets',
		'with_front'            => true,
		'pages'                 => true,
		'feeds'                 => true,
	);
	$args = array(
		'label'                 => 'Projet',
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail', 'custom-fields', 'page-attributes' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
        'rewrite'               => $rewrite,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
	);
	register_post_type( 'project', $args );

}
add_action( 'init', 'init_project_custom_post_type', 0 );

// Register Custom Taxonomy
function custom_taxonomy_project_type() {

	$labels = array(
		'name'                       => 'Types',
		'singular_name'              => 'Type',
		'menu_name'                  => 'Types',
		'all_items'                  => 'All Items',
		'parent_item'                => 'Parent Item',
		'parent_item_colon'          => 'Parent Item:',
		'new_item_name'              => 'New Item Name',
		'add_new_item'               => 'Add New Item',
		'edit_item'                  => 'Edit Item',
		'update_item'                => 'Update Item',
		'view_item'                  => 'View Item',
		'separate_items_with_commas' => 'Separate items with commas',
		'add_or_remove_items'        => 'Add or remove items',
		'choose_from_most_used'      => 'Choose from the most used',
		'popular_items'              => 'Popular Items',
		'search_items'               => 'Search Items',
		'not_found'                  => 'Not Found',
		'no_terms'                   => 'No items',
		'items_list'                 => 'Items list',
		'items_list_navigation'      => 'Items list navigation',
	);
	$args = array(
		'labels'                     => $labels,
		'hierarchical'               => true,
		'public'                     => true,
		'show_ui'                    => true,
		'show_admin_column'          => true,
		'show_in_nav_menus'          => true,
		'show_tagcloud'              => false,
	);
	register_taxonomy( 'type', array( 'project' ), $args );

}
add_action( 'init', 'custom_taxonomy_project_type', 0 );



/*AOS LIBRAIRIE SCRIPT */
add_action('wp_footer', 'custom_scripts');
function custom_scripts() {
    ?>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>
    <?php
}