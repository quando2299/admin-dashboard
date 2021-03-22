import { Injectable } from '@angular/core';
import 'devextreme/data/odata/store';
import DataSource from 'devextreme/data/data_source';

@Injectable()
export class DataGridService {
    getDataSource(): any {
        return new DataSource({
            store: {
                type: 'odata',
                url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
                // tslint:disable-next-line:typedef
                beforeSend(request: any) {
                    request.params.startDate = '2020-05-10';
                    request.params.endDate = '2020-05-15';
                }
            }
        });
    }
}
