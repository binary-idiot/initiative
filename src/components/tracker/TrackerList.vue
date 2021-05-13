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
					<td>
						<button @click="removeEntityFromEncounter(index)">
							<IconBase icon-name="Delete">
								<IconTrash />
							</IconBase>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import IconBase from '@/components/icons/IconBase.vue';
import IconTrash from '@/components/icons/IconTrash.vue';

export default {
	name: 'TrackerList',
	components: {
		IconBase,
		IconTrash,
	},
	computed: {
		...mapState({
			entities: (state) => state.encounter.sort((a, b) => a.order - b.order),
		}),
	},
	methods: {
		removeEntityFromEncounter(index) {
			this.deleteEntity(index);
		},
		...mapActions([
			'deleteEntity',
		]),
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
				button{
					padding: 0;
					margin: 0;
					height: 25px;
					.icon{
						width: 20px;
						height: 20px;
						margin: 0;
					}
				}
			}
		}
	}
</style>
