import React from 'react';
import axios from 'axios';
import moment from 'moment';
import NewWindow from 'react-new-window';
import PropTypes from "prop-types";
import Table from '../../components/table/Table.jsx';

class ReportTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            reportWindow: <div />,
        };
    }

    componentDidMount() {
        const token = window.localStorage.getItem('jwt');
        const {
<<<<<<< HEAD
            deviceId, attrs, dateFrom, dateTo, t, deviceLabel,
=======
            deviceId, attrs, dateFrom, dateTo, t, deviceLabel, checkClose,
>>>>>>> upstream/development
        } = this.props;
        const URL = `history/device/${deviceId}/history?attr=${attrs.join('&attr=')}&dateFrom=${moment(dateFrom).utc().format('YYYY-MM-DDTHH:mm')}&dateTo=${moment(dateTo).utc().format('YYYY-MM-DDTHH:mm')}`;
        axios.get(URL, { headers: { Authorization: `Bearer ${token}` } }).then((result) => {
            const reportWindow = Array.isArray(result.data) ? (
<<<<<<< HEAD
                <NewWindow title={`${deviceLabel} - ${deviceId}`}>
=======
                <NewWindow title={`${deviceLabel} - ${deviceId}`} onUnload={checkClose}>
>>>>>>> upstream/development
                    <div className="ReportTitle">{`${deviceLabel} - ${deviceId}`}</div>
                    <Table key="tb-123" itemList={result.data} t={t} />
                </NewWindow >
            ) : (
<<<<<<< HEAD
                    <NewWindow title={`${deviceLabel} - ${deviceId}`}>
                        <div className="ReportTitle">{`${deviceLabel} - ${deviceId}`}</div>
                        {
=======
                <NewWindow title={`${deviceLabel} - ${deviceId}`} onUnload={checkClose}>
                    <div className="ReportTitle">{`${deviceLabel} - ${deviceId}`}</div>
                    {
>>>>>>> upstream/development
                            Object.keys(result.data).map(
                                (value) => <Table key="tb-321" itemList={result.data[value]} t={t} />,
                            )
                        }
<<<<<<< HEAD
                    </NewWindow>
=======
                </NewWindow>
>>>>>>> upstream/development
                );
            this.setState({ reportWindow });
        }).catch(() => {
            const reportWindow = (
<<<<<<< HEAD
                <NewWindow title={`${deviceLabel} - ${deviceId}`}>
=======
                <NewWindow title={`${deviceLabel} - ${deviceId}`} onUnload={checkClose}>
>>>>>>> upstream/development
                    <div className="ReportTitle">{`${deviceLabel} - ${deviceId}`}</div>
                    <div style={
                        {
                            fontSize: 32,
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontWeight: 500,
                            color: 'rgba(0,0,0,0.75)',
                        }
                    }
                    >
                        {t('report:reports.not_found')}
                    </div>
                </NewWindow>
            );
            this.setState({ reportWindow });
        });
    }

    render() {
        const { reportWindow } = this.state;
        return (
            <div>
                {reportWindow}
            </div>
        );
    }
}

ReportTable.propTypes = {
<<<<<<< HEAD
=======
    checkClose: PropTypes.func.isRequired,
>>>>>>> upstream/development
    deviceLabel: PropTypes.string.isRequired,
    deviceId: PropTypes.string.isRequired,
    attrs: PropTypes.arrayOf(PropTypes.string).isRequired,
    dateFrom: PropTypes.instanceOf(Date).isRequired,
    dateTo: PropTypes.instanceOf(Date).isRequired,
    t: PropTypes.func.isRequired,
};

export default ReportTable;
