# used in the simulation process

def seconds_to_time(seconds):
    time = seconds / 3600
    seconds = time * 60 * 60
    minutes, seconds = divmod(seconds, 60)
    hours, minutes = divmod(minutes, 60)
    return "%02d:%02d:%02d" % (hours, minutes, seconds)


def time_to_seconds(time):
    h, m, s = time.split(':')
    return int(h) * 3600 + int(m) * 60 + int(s)
