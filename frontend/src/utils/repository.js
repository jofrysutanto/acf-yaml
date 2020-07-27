import ajax from "./ajax";
export default new class {

  async fetchAll () {
    let { data } = await ajax.post({
      action: 'windsor_load_fields',
    })
    return data.field_groups
  }

  async fetchSingle ({key, mode}) {
    let { data } = await ajax.post({
        action: 'windsor_load_single',
        key,
        mode
      })
    let { field_group, yaml } = data
    return { field_group, yaml }
  }

}
