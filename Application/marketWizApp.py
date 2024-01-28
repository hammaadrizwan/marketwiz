import tkinter.ttk as ttk
import customtkinter as ctk
import tkinter as tk
from PIL import ImageTk, Image

root = tk.Tk()
root.title("marketWiz")
root.iconbitmap("Application\images\dark.ico")
root.configure(bg='#28292B')
root.geometry("1050x680")
logo = tk.PhotoImage(file="Application\images\marketwizlogo.png")
logo_label = tk.Label(root, image=logo, borderwidth=0, highlightthickness=0)
logo_label.place(relx=0.5, rely=0.5, anchor='center')

def clear_window(event):
    for widget in root.winfo_children():
        widget.destroy()

root.bind("<Button-1>", clear_window)

# Create a frame
login_frame = tk.Frame(root, bg='#28292B')
# Create a style
style = ttk.Style()
style.configure("TEntry", foreground="gray")

# Create email entry
email_var = tk.StringVar()
email_entry = ttk.Entry(login_frame, textvariable=email_var, style="TEntry")
email_var.set("Email")
email_entry.bind("<FocusIn>", lambda args: email_var.set(''))
email_entry.pack(pady=10)

# Create password entry
password_var = tk.StringVar()
password_entry = ttk.Entry(login_frame, textvariable=password_var, style="TEntry", show="*")
password_var.set("Password")
password_entry.bind("<FocusIn>", lambda args: password_var.set(''))
password_entry.pack(pady=10)
        


root.mainloop()