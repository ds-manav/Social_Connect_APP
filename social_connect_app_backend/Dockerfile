# For more information, please refer to https://aka.ms/vscode-docker-python
FROM python:3.10
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY ./social_connect_app_backend/requirements.txt /code/
RUN pip install -r ./requirements.txt
COPY ./social_connect_app_backend /code/
CMD ["python","manage.py" , "runserver","0.0.0.0:8000"]

# Keeps Python from generating .pyc files in the container
# ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
# ENV PYTHONUNBUFFERED=1
# ENV NODE_ENV=development
# RUN pip install --upgrade pip
# Install pip requirements
# COPY requirements.txt ./requirements.txt
# RUN python -m pip install -r requirements.txt

# COPY . /src/app

# Creates a non-root user with an explicit UID and adds permission to access the /app folder
# For more info, please refer to https://aka.ms/vscode-docker-python-configure-containers
# RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /src/app
# USER appuser

# During debugging, this entry point will be overridden. For more information, please refer to https://aka.ms/vscode-docker-python-debug
# File wsgi.py was not found. Please enter the Python path to wsgi file.
# CMD ["python","manage.py" , "runserver","127.0.0.1:8000"]
