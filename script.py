# %% [markdown]
# Цель: на данной практической работе необходимо использовать датасет с прошлой практической работы и визуализировать данные в виде графиков.

# %%
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

yandex = pd.read_csv("yandex_tracks_top100.csv")

x = ["name","monthly_listens_total","track_len","link","genre"]
y= [10,11,12,14,15]
plt.figure(figsize=(6,5))
plt.bar(x,y, label = "Стобчатая диаграмма", color = "red")
plt.plot(x,y, label = "Линейный график")
plt.legend()
plt.title("Комбинированный график")
plt.xlabel("Ось x")
plt.ylabel("Ось Y")

plt.show()

# %% [markdown]
# Создание комбинированного графика где "name" имеет  значение 10,"monthly_listens_total" имеет  значение 11,"track_len" имеет  значение 12,"link" имеет  значение 14,"genre" имеет  значение 15.
# Имеют разные цвета.
# figur size задает  размер.
# Содержит 1 линейный и 1 столбчатый график.

# %%
yandex = pd.read_csv("yandex_tracks_top100.csv")

x = ["name","monthly_listens_total","track_len","link","genre","chart"]
y= [9,12,13,25,10,1]
plt.figure(figsize=(6,5))
plt.bar(x,y, label = "Стобчатая диаграмма", color = "blue")

plt.legend()
plt.title("Столбчатая диаграмма")
plt.xlabel("Ось x")
plt.ylabel("Ось Y")

plt.show()

# %% [markdown]
# Простая столбчатая диаграмма с изменными значениями и другим цветом.

# %%
yandex = pd.read_csv("yandex_tracks_top100.csv")

x = ["name","monthly_listens_total","track_len","link","genre","chart"]
y= [9,13,15,17,15,10]
plt.figure(figsize=(6,5))
plt.bar(x,y, label = "Стобчатая диаграмма", color = "orange")
plt.plot(x,y, label = "Линейный график",color = "red")
plt.legend()
plt.title("Комбинированный график")
plt.xlabel("Ось x")
plt.ylabel("Ось Y")

plt.show()

# %% [markdown]
# Создание комбинированного графика где "name" имеет  значение 9,"monthly_listens_total" имеет  значение 13,"track_len" имеет  значение 15,"link" имеет  значение 17,"genre" имеет  значение 15,"chart" имеет  значение 10.
# Имеют разные цвета.
# Содержит 1 линейный и 1 столбчатый график.

# %%
yandex = pd.read_csv("yandex_tracks_top100.csv")

# %%
plt.plot(yandex["chart"].head(10), yandex["artists_likes_total"].head(10), color = "green", label = "Статистика chart и artists_likes_total")
plt.grid()
plt.legend()
plt.show()

# %% [markdown]
# Создание линейной диаграммы где идет подсчет по 10 chart и 10 artists_likes_total, чем больше artists_likes_total тем больше грфик. Изменен цвет.

# %%
x = ["name","monthly_listens_total","track_len","link","genre","chart"]
y= [10,11,12,14,19,20]
colors = ["purple", "green","pink", "blue", "yellow", "orange"]
plt.pie(y, labels=x, colors= colors, autopct= "%1.1f%%")
plt.title("Круговая диаграмма")
plt.show()

# %% [markdown]
# Создание круговой диаграммы где "name" имеет  значение 10,"monthly_listens_total" имеет  значение 11,"track_len" имеет  значение 12,"link" имеет  значение 14,"genre" имеет  значение 19,"chart" имеет  значение 20.
# Имеют свои цвета.
# И посчитано в процентном соотношении.

# %%
plt.pie(yandex["Explicit_content"].value_counts(),labels=yandex["Explicit_content"].value_counts().index,autopct="%1.1f%%", colors=["pink", "purple"])
plt.legend()
plt.show()

# %% [markdown]
# Построенна круговая диаграмма по Explicit_content в процентном соотношении с измененным цветом.

# %%
plt.scatter(yandex["Explicit_content"].head(50), yandex["Explicit_content"].head(50))

plt.legend()
plt.show()

# %% [markdown]
# Диаграмма рассеяния 2. Рассеяния по chart 50 и chart 50 идущее до 1.

# %%
plt.scatter(yandex["chart"].head(10), yandex["chart"].head(10))

plt.legend()
plt.show()

# %% [markdown]
# Диаграмма рассеяния 2. Рассеяния по chart 10 и chart 10 идущее до 10.

# %%
import numpy as np
x = np.random.randn(100)

plt.hist(x, bins=10, label="Гистограмма")
plt.legend()
plt.show()

# %% [markdown]
# Сделана гистрамма с 100 рандомными и 10 столбцами.

# %%
import numpy as np
x = np.random.randn(1000)

plt.hist(x, bins=5, label="Гистограмма")
plt.legend()
plt.show()

# %% [markdown]
# Сделал гистограмму 2. Изменил кол-во столбцов и рандомное число.

# %%
import numpy as np
x = np.random.randn(100)

plt.hist(x, bins=100, label="Гистограмма", color = "orange")
plt.legend()
plt.show()

# %% [markdown]
# Сделал гистограмму 3. Изменил кол-во столбцов и рандомное число и изменил цвет.

# %% [markdown]
# Вывод: на данной практической работе мы использовали датасет с прошлой практической работы и визуализировали данные в виде графиков.


