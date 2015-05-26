<?php
/**
 * @file
 * recipe_feature.features.inc
 */

/**
 * Implements hook_node_info().
 */
function recipe_feature_node_info() {
  $items = array(
    'recipe_name' => array(
      'name' => t('Recipe Name'),
      'base' => 'node_content',
      'description' => t('Field for making recipes'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
