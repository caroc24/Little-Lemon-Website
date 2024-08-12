export default function BookingForm(){
    return <bookingform className = "bookingform">
        <form>
            <label>
                Number of guests:
                <input type="number" name="guests" />
            </label>
            <button type="Submit">Submit</button>
        </form>
    </bookingform>
}
