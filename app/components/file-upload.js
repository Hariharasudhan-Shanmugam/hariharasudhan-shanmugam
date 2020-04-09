import Component from '@ember/component';

export default Component.extend({
  tagName: 'form',
  submit(event) {
    event.preventDefault();
    let mpDropDown = [];
    let mpDropDownList = [];
    let data = {
        dsm: []
    };
    let file = this.element.querySelector('[name="csv"]').files[0];
    this.readFileContent(file).then((textFile) => {
      let content = textFile.split('\n');
    for(let i=0; i < content.length ; i++) {
        let item = content[i].split(',');
        mpDropDown.push({"marketPlace": item[0]});
        data.dsm.push({
            "marketPlace" : item[0],
            "gl"  :  item[1],
            "firstResponseContact": item[2],
            "escalation1": item[3],
            "escalation2": item[4],
            "inputProvider": item[5]
        });
      }
      const arrayUniqueByKey = [...new Map(mpDropDown.map(item =>
  [item['marketPlace'], item])).values()];
    for(let i=0; i<(arrayUniqueByKey.length); i++) {
    mpDropDownList.push( arrayUniqueByKey[i].marketPlace);
    }
    this.set('marketPlaceList', mpDropDownList);

      this.set('data', data);
  });
},
  readFileContent(file) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = event => resolve(event.target.result);
      reader.onerror = error => reject(error);
      reader.readAsBinaryString(file);
    });
  }
});
