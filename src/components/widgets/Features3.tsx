import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';

const Features3 = ({ header, items, columns, isBeforeContent, isAfterContent, id, isDark = false }: FeaturesProps) => (
  <WidgetWrapper
    id={id ? id : ''}
    isDark={isDark}
    containerClass={`max-w-6xl ${isBeforeContent ? 'md:pb-8 lg:pb-12' : ''} ${
      isAfterContent ? 'pt-0 md:pt-0 lg:pt-0' : ''
    }`}
  >
    {header && <Headline header={header} titleClass="text-4xl md:text-5xl" />}
    <ItemGrid
      id={id}
      items={items}
      columns={columns}
      defaultColumns={3}
      panelClass="h-full relative flex flex-col text-center rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 shadow p-8"
      iconClass="h-12 w-12 flex justify-center items-center rounded-md text-white bg-primary-900 mb-6 md:p-3 mx-auto"
      titleClass="mb-3 text-xl font-bold"
      descriptionClass="text-gray-600 dark:text-slate-400"
    />
  </WidgetWrapper>
);

export default Features3;
