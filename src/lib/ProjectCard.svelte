<script lang="ts">
	import * as Card from '$lib/components/ui/card/index';
	import { Button } from '$lib/components/ui/button/index';
</script>

<Card.Root>
	<Card.Header>
		<img
			alt=""
			src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1770&amp;q=80"
			class="h-56 w-full object-cover" />
	</Card.Header>
	<Card.Content>
		<Card.Title>Lorem ipsum dolor</Card.Title>
		<Card.Description>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
			dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
			sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
			voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
			Molestias explicabo corporis voluptatem?
		</Card.Description>
	</Card.Content>
	<Card.Footer>
		<Card.Action>
			<Button type="button" variant="link">See more</Button>
		</Card.Action>
	</Card.Footer>
</Card.Root>
<!-- 
<article class="overflow-hidden rounded-lg bg-white">
	<img
		alt=""
		src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1770&amp;q=80"
		class="h-56 w-full object-cover" />

	<div
		class="
    p-4
    sm:p-6
  ">
		<a href="#">
			<h3 class="text-lg font-medium text-gray-900">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</h3>
		</a>

		<p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
			dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
			sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
			voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
			Molestias explicabo corporis voluptatem?
		</p>

		<a
			href="#"
			class="
     group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600
   ">
			Find out more

			<span
				aria-hidden="true"
				class="
      block transition-all
      group-hover:ms-0.5
      rtl:rotate-180
    ">
				→
			</span>
		</a>
	</div>
</article> -->
