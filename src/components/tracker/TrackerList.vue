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
			<tfoot>
				<tr>
					<td><input type="text" name="order" id="save-entity-order"></td>
					<td><input type="text" name="name" id="save-entity-name"></td>
					<td><input type="text" name="hp" id="save-entity-hp"></td>
					<td>
						<button @click="addEntityToEncounter">
							<IconBase icon-name="Add" :width="16" :height="16">
								<IconPlus />
							</IconBase>
						</button>
					</td>
				</tr>
			</tfoot>
		</table>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import IconBase from '@/components/icons/IconBase.vue';
import IconPlus from '@/components/icons/IconPlus.vue';
import IconTrash from '@/components/icons/IconTrash.vue';

export default {
	name: 'TrackerList',
	components: {
		IconBase,
		IconPlus,
		IconTrash,
	},
	computed: {
		...mapState({
			entities: (state) => state.encounter.sort((a, b) => a.order - b.order),
		}),
	},
	methods: {
		addEntityToEncounter() {
			const order = document.getElementById('save-entity-order').value;
			const name = document.getElementById('save-entity-name').value;
			const hp = document.getElementById('save-entity-hp').value;
			this.saveEntity({
				order, name, hp,
			});
		},
		removeEntityFromEncounter(index) {
			this.deleteEntity(index);
		},
		...mapActions([
			'saveEntity',
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
