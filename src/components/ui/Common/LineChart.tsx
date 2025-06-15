import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Mon', team1: 4, team2: 3, team3: 2 },
    { name: 'Tue', team1: 5, team2: 4, team3: 5 },
    { name: 'Wed', team1: 6, team2: 4.5, team3: 3 },
    { name: 'Thu', team1: 5.5, team2: 6.5, team3: 4.5 },
    { name: 'Fri', team1: 4, team2: 6, team3: 5 },
    { name: 'Sat', team1: 5, team2: 3.5, team3: 2 },
];

export default function TeamPerformanceChart() {
    return (
        <div className=' w-full my-2 h-60 pr-10'>
            <h2 className='  pl-12 pb-5 font-bold text-[18px]'>Team Performance</h2>
            <ResponsiveContainer className="" >

                <LineChart data={data}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis domain={[1, 7]} axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Legend verticalAlign='top' />
                    <Line type="linear" dataKey="team1" stroke="#7ED957" name="Project Team" dot={true} fill='green' strokeWidth={3} />
                    <Line type="linear" dataKey="team2" stroke="#FF5C5C" name="Project Team" dot={true} fill='red' strokeWidth={3} />
                    <Line type="linear" dataKey="team3" stroke="#5CACEE" name="Project Team" dot={true} fill='blue' strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
