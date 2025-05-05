import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'On Half day', value: 80 },
    { name: 'Present', value: 80 },
    { name: 'On leave', value: 80 },
];

const COLORS = ['#FF8042', '#00BFA5', '#42A5F5'];  // Orange/Red, Green/Teal, Blue

export default function PieCharts() {
    return (
        <div className="w-full h-full max-w-sm p-4 border rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-lg">Attendance Overview</h2>
                <span className="text-gray-500 text-sm hover:text-gray-700 cursor-pointer">All time ▼</span>
            </div>

            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={2}
                        dataKey="value"
                    >
                        {data.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            <div className="mt-4 space-y-2">
                {data.map((entry, index) => (
                    <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                            <span
                                className="inline-block w-3 h-3 rounded-full mr-2"
                                style={{ backgroundColor: COLORS[index] }}
                            ></span>
                            <span >{entry.name}</span>
                        </div>
                        <span className="font-bold">{entry.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
