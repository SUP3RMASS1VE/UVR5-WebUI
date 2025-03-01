module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/SUP3RMASS1VE/UVR5-UI-Fork app",  // Clone the GitHub repository
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",  // Virtual environment folder path
          path: "app",  // Path to start the shell from
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",  // Virtual environment folder path
        path: "app",  // Path to start the shell from
        message: [
          "uv pip install gradio devicetorch",
          "uv pip install -r requirements.txt"
        ]
      }
    },
    {
      method: "fs.link",
      params: {
        venv: "app/env"
      }
    },
  ]
}
