/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2018 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
import {Page, MapTo, withComponentMappingContext } from "@adobe/cq-react-editable-components";
import {withRoute} from '../RouteHelper';

require('./Page.css');

// This component is a variant of a Page component mapped to the "media_publication_spa/components/page" resource type
// For now, the rendering is the same as the RootPage; this is more for illustration purposes
class AppPage extends Page {

    get containerProps() {
        let attrs = super.containerProps;
        attrs.className = (attrs.className || '') + ' page ' + (this.props.cssClassNames || '');
        return attrs
    }
}

export default MapTo('media_publication_spa/components/page')(withComponentMappingContext(withRoute(AppPage)));