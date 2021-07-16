export const segmentValidate = (data) => {
    let spanArray = [];
    if (data.start_end.includes('-')) {
        spanArray = data.start_end.split('-');
    } else {
        console.log('error seen in data');
        return null;
    }
    const start = spanArray[0];
    const end = spanArray[1];
    if ((parseInt(end) - parseInt(start)) === parseInt(data.distance)) {
        console.log('success!')
    } else {
        console.log('error in data!')
        return null;
    }
    delete data["start_end"]
    const fullData = {...data, 'start': start, 'end': end};
}