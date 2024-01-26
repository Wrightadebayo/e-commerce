import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckBox from './FormCheckBox';

const Filter = () => {
  const {meta,params}=useLoaderData()
const {search,company,category,shipping,order,price} = params
  return <Form className='bg-base-200
   rounded-md px-8 py-4 grid gap-x-4 gap-y-8 
   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 item-center'>
{/* search */}
<FormInput 
type='search'
label='search products'
name='search'
size='input-sm' 
defaultvalue={search}
/>
{/* categories */}
<FormSelect 
label='select category' 
name='category' 
list={meta.categories}
 size='select-sm'
 defaultvalue={category}
 />

{/* companies */}
<FormSelect 
label='select company' 
name='company'
 list={meta.companies} 
 size='select-sm'
 defaultvalue={company}
 />
{/* order */}
<FormSelect 
label='sort by' 
name='order' 
list={['a-z','z-a','high','low']} 
size='select-sm'
defaultvalue ={order}
/>
{/* // price */}
<FormRange 
name='price' 
label='select price' 
size='range-sm'
price={price}
/>
{/* // SHIPPING */}
<FormCheckBox 
name='shipping' 
label='free shipping' 
size='checkbox-sm'
   defaultValue={shipping}
/>
{/* button */}
<button type='submit' className='btn btn-primary btn-sm'>search</button>
   <Link to ='/products' className='btn btn-accent btn-sm'>reset</Link>
   </Form>
    
  
}

export default Filter