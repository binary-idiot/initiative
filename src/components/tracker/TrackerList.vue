<template>
	<div class="tracker-list">
		<table>
			<thead>
				<tr>
					<th>Order</th>
					<th>Name</th>
					<th>HP</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(entity, index) in entities" :key="index">
					<td>{{ entity.order }}</td>
					<td>{{ entity.name }}</td>
					<td>{{ entity.hp }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'TrackerList',
	computed: {
		...mapState({
			entities: (state) => state.entities.sort((a, b) => a.order - b.order),
		}),
	},
};
</script>

<style lang="scss" scoped>
	.tracker-list{
		table{
			width: max-content;
			margin: auto;

			td{
				padding: 2px 10px;
			}
		}
	}
</style>
