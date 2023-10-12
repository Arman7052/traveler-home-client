import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'


const Calender = ({ value, handleSelect }) => {
    return (
        <div className='text-center'>
            <DateRange
                rangeColors={['#4DB6AC']}
                ranges={[value]}
                onChange={handleSelect}
                date={value.startDate}
                direction='vertical'
                showDateDisplay={false}
                minDate={value.startDate}
                maxDate={value.endDate}
            ></DateRange>
        </div>
    );
};

export default Calender;