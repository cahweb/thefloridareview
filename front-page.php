<?php
/**
 * The Front Page Template
 *
 * I wish it was more explicit how this worked, other than "Name it front-page.php and it
 * will change the front page." Edit this to change the front page.
 *
 * @package cah-starter
 */
get_header(); 

?>
<div class="hero-background" style="background-image: url(<?php the_post_thumbnail_url();?>);">
	<div class="hero-container">

		<?php
			$query = new WP_Query(array(
					    'post_type' => 'issue',
					    'post_status' => 'publish',
					    'posts_per_page' => 1
					));

			$query->the_post();
			$issue_id = get_the_id();
			$issue_title = get_the_title();
			$issue_cover_date = get_post_meta($issue_id, "cov-date", true);
			$issue_vol = get_post_meta($issue_id, "vol-num", true);
			$issue_num = get_post_meta($issue_id, "issue-num", true);
			$issue_excerpt = get_the_excerpt();
			$issue_url = get_the_permalink();
		?>

		<div class="feature-issue-image">
			<div style="background-image: url(<?=get_the_post_thumbnail_url();?>);"></div>
		</div>
		<div class="feature-issue-content">
			<img src="<?=wp_get_attachment_url(42);?>">
			<div class="feature-header">
				<h2>Current Issue</h2>
				<h5><?=$issue_vol.".".$issue_num." | ".$issue_cover_date?></h5>
			</div>
			<p><?=(strlen($issue_excerpt) > 250) ? substr($issue_excerpt,0,250)."..." : $issue_excerpt?></p>
			<a href="<?=$issue_url?>" class="read-more">Read More</a>
		</div>
	</div>
</div>

<div class="banner">
	<img src="<?=wp_get_attachment_url(48);?>" style="text-align: center;">
</div>

<div class="index-content">

	<div class="article-content">
		<?php

			$article_displays = array("Literary Features", "Writer Interviews", "Book Reviews", "Digital Stories");

			$slugs = array(
				"Literary Features" => "literary-features",
				"Writer Interviews" => "writer-interviews",
				"Book Reviews" => "book-review",
				"Digital Stories" => "digital-stories"
			);

			foreach ($article_displays as $article_cat) {
		?>

			<div class="article-display">
				<h2><?=$article_cat?></h2>
				<div class="article-container">

				<?php 
					$query = new WP_Query(array(
					    'post_type' => 'article',
					    'post_status' => 'publish',
					    'posts_per_page' => 5,
					    'category_name' => $slugs[$article_cat]
					));

					while ($query->have_posts()) {
					    $query->the_post();
					    $post_id = get_the_id();
					    $post_title = get_the_title();
					    $thumbnail = get_the_post_thumbnail_url($post_id);
					    $authors = get_post_meta($post_id,"authors",true);
					    $date = get_post_meta($post_id,"doi",true);
					?>
						<a href="<?=get_the_permalink();?>">
							<div class="article">
								<img src="<?=$thumbnail?>">
								<h3><?=$post_title?></h3>
								<h5><?="Fiction by ".$authors?></h5>
								<h6><?=$date?></h6>
							</div>
						</a>

					<?php
					}

					wp_reset_postdata();
					?>
				</div>
			</div>


		<?php
		}
		?>
	</div>

	<div class="sidebar">
		<h2>Announcements</h2>
	</div>
</div>

<?php
// get_sidebar();
get_footer();

?>