import Controller from '@ember/controller';
//import { inject as service } from "@ember/service";

export default Controller.extend({
  //session:service(),
  setupController(){
    this._super(...arguments);

  },
    actions: {
    onSelectMarketPlace(selectedMarketPlace){
          let filterGL = [];
          this.set('selectedMarketPlace', selectedMarketPlace);
          console.log("selected marketPlace"+selectedMarketPlace);
          let glLength = this.data.dsm.filter(request => request['marketPlace'] == selectedMarketPlace).length;
          for(let i=0; i<glLength; i++){
            filterGL.push(this.data.dsm.filter(request => request['marketPlace'] == selectedMarketPlace)[i].gl);
          }
          this.set('filterGL', filterGL);
    },
    onSelectGL(selectedGL){
        let finalDetails = []
        console.log("selected GL"+selectedGL);
        finalDetails =  this.data.dsm.filter(request => request['marketPlace'] == this.get('selectedMarketPlace') && request['gl'] == selectedGL);
        this.set('firstResponseContact',finalDetails[0].firstResponseContact);
        this.set('escalation1',finalDetails[0].escalation1);
        this.set('escalation2',finalDetails[0].escalation2);
        this.set('inputProvider',finalDetails[0].inputProvider);
      },
      copy(id){
        this.copyField(id);
      }
  },
  copyField(id){
    let copyFRC = document.getElementsByClassName(id)[0];
    copyFRC.select();
    copyFRC.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
  }
});
