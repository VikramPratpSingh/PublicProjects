import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  public transform(value: Array<any>, text: string, filters: Array<string> ) {
    if(!text && (!filters || filters.length < 1))
      return value;
    else if(text && (!filters || filters.length < 1))
      return value.filter(item => item.title.toLowerCase().indexOf(text.toLowerCase()) > -1);
    else if(!text && filters && filters.length >0)
      return value.filter(item => {
                                      console.log('***')
                                      console.dir(item)
                                      var flag = false
                                      filters.forEach(ele => {
                                        if((item.geners).indexOf(ele) > -1)
                                        flag =  true;
                                      });
                                      return flag;
                                  });
    else if(text && filters && filters.length >0){
      var filtered = value.filter(item => {
                                          var flag = false
                                          filters.forEach(ele => {
                                            if((item.geners).indexOf(ele) > -1)
                                            flag =  true;
                                          });
                                          return flag;
                                      });
      return filtered.filter(item => item.title.toLowerCase().indexOf(text.toLowerCase()) > -1);
    }
    else
      return value
  }

}
